import { state } from "./state.mjs"

export const model = {
    page: 'home',
    propose ({go_to}) {
        if (go_to) {
            this.page = go_to;
        } else return;

        this.present(state);
    },
    present(state) {
        state.render(this);
    },
}