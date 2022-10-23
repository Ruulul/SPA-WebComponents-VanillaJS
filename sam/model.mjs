import { state } from "./state.mjs"

export const model = {
    page: 'loading...',
    propose ({go_to}) {
        if (go_to) {
            if (go_to === this.page) return;
            this.page = go_to;
        } else return;

        this.present(state);
    },
    present(state) {
        state.render(this);
    },
}