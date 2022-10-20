import { state } from "./state.mjs"

export const model = {
    page: 'home',
    is_navigating: false,
    propose ({go_to, end_navigation}) {
        if (go_to && !this.is_navigating) {
            this.is_navigating = true;
            this.page = go_to;
        } else if (end_navigation && this.is_navigating) {
            this.is_navigating = false;
        } else return;

        this.present(state);
    },
    present(state) {
        state.render(this);
    },
}