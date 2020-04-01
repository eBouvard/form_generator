import api from '@/service/api'
import store from '@/service/store'

export default function (templateName) {
    api()
        .get("/read/all/template")
        .then(ret => {
            const raw = ret.data;
            const list = {};
            raw.forEach(element => {
                list[element.name] = element.data;
            });
            store.commit("SET_TEMPLATELIST", list);
            store.commit("SET_TEMPLATE", templateName);
        })
        .catch(e => {
            console.log(e);
        })
}