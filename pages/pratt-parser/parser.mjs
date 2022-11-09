export function parse (stream, _tokens, right_binding = 0) {
    let tokens = _tokens ? _tokens : tokenize(stream);
    let left = nud(tokens);

    while (binding(peekToken(tokens)) > right_binding) {
        left = led(left, tokens);
    }

    return left;

    function tokenize (stream) {
        return stream.split(' ');
    }

    function nud (tokens) {
        return { token: nextToken(tokens) };
    }

    function led (left, tokens) {
        let token = nextToken(tokens);
        let right = '^'.includes(token)
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