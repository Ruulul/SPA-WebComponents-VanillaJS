import { actions } from "./actions.mjs"
import { view } from "../view.mjs"

export const state = {
    render (model) {
        if (this.nap(model)) {
            view.render(model);
        };
    },
    nap ({is_navigating}) {
        return is_navigating;
    },
}