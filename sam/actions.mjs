import { model } from "./model.mjs"

export const actions = {
    goTo (page) {
        model.propose({ go_to: page })
    },
    pushData (data) {
        model.propose({push_data: data})
    },
}

export const intents = {
    goto (page) {
        window.history.pushState({}, 
            page, 
            '?path='+page
        );
        actions.goTo(page);
    },
    push_data (data) {
        actions.pushData(data)
    },
}