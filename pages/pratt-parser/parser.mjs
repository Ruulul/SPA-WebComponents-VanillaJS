export function parse (stream, _tokens, right_binding = 0) {
    let tokens = _tokens || tokenize(stream);
    let left = nud(tokens);

    while (binding(peekToken(tokens)) > right_binding) {
        left = led(left, tokens);
    }

    return left;

    function tokenize (stream) {
        let tokens =
        stream
        .split('')

        tokens
        .map((token, index)=>
            '+-*/^ '
            .split('')
            .map(symbol=>{
                if (token.includes(symbol) && token.length > 1) {
                    let split = token.split(symbol);
                    split.slice(0, -1).map((token, i)=>{
                        split.splice(split.indexOf(token, i + 1), 0, symbol)
                    })
                    tokens.splice(index, 1, split)
                }
            })
        )
        return tokens.filter(token=>token!==' ');
    }

    function nud (tokens) {
        return { token: nextToken(tokens) };
    }

    function led (left, tokens) {
        let token = nextToken(tokens);
        let right = isRightBinding(token)
            ? parse(undefined, tokens, binding(token) - 1)
            : parse(undefined, tokens, binding(token));
        return { left, token, right };
    }

    function nextToken (tokens) {
        return tokens.splice(0, 1)[0];
    }

    function peekToken (tokens) {
        return tokens[0]
    }

    function binding (token) {
        switch (token) {
            case '^':
                return 30;
            case '*':
            case '/':
                return 20;
            case '+':
            case '-':
                return 10;
            default: return 0;
        }
    }

    function isRightBinding (token) {
        switch (token) {
            case '^': return true;
            default: return false;
        }
    }
}

export function evalTree ({token, left, right}) {
    if ("+-*/^".includes(token)) {
        switch (token) {
            case '+': return evalTree(left) + evalTree(right);
            case '-': return evalTree(left) - evalTree(right);
            case '*': return evalTree(left) * evalTree(right);
            case '/': return evalTree(left) / evalTree(right);
            case '^': return evalTree(left) ** evalTree(right);
        }
    }
    return parseInt(token);
}