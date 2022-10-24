import { state } from "./state.mjs"

export const model = {
    page: 'loading...',
    path: '',
    propose ({go_to}) {
        if (go_to) {
            if (go_to === this.page + (this.path ? '/' + this.path : '')) return;
            let full_path = go_to.split('/');
            this.page = full_path[0];
            this.path = full_path.slice(1).join('/');
        } else return;

        this.present(state);
    },
    present(state) {
        state.render(this);
    },
}