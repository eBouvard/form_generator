import api from '@/service/api'

export default function () {
    api()
        .get("/read/all/template")
        .then(ret => {
            const raw = ret.data;
            const list = {};
            raw.forEach(element => {
                list[element.name] = element.data;
            });
            this.$store.commit("SET_TEMPLATELIST", list);
        })
        .catch(e => {
            console.log(e);
        })
}