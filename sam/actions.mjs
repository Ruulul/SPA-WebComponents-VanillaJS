import { model } from "./model.mjs"

export const actions = {
    goTo (page) {
        model.propose({ go_to: page })
    },
    endNavigation () {
        model.propose({ end_navigation: true });
    }
}

export const intents = {
    goto (page) {
        window.history.pushState({}, 
            page, 
            '?path='+page
        );
        actions.goTo(page);
        actions.endNavigation();
    },
}