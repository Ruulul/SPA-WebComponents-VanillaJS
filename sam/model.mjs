import { state } from "./state.mjs"

export const model = {
    page: 'home',
    mutation: false,
    propose ({go_to, end_mutation}) {
        if (go_to && !this.mutation) {
            this.mutation = true;
            this.page = go_to;
        } else if (end_mutation && this.mutation) {
            this.mutation = false;
        } else return;

        this.present(state);
    },
    present(state) {
        state.render(this);
    },
}