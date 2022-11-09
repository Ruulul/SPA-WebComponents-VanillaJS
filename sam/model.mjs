import { state } from "./state.mjs"

export const model = {
    page: 'loading...',
    path: '',
    data: {},
    propose ({go_to, push_data}) {
        if (go_to) {
            if (go_to === this.page + (this.path ? '/' + this.path : '')) return;
            let full_path = go_to.split('/');
            this.page = full_path[0];
            this.path = full_path.slice(1).join('/');
        } else 
        if (push_data) {
            this.data = {...this.data, ...push_data};
        } else 
        return;

        this.present(state);
    },
    present(state) {
        state.render(this);
    },
}