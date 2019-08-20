import LoadingStore from "./LoadingStore";
import UserStore from "./UserStore";
import NavigationStore from "./NavigationStore";
import DinoStore from "./DinoStore"

const loadingStore = new LoadingStore()
const navigationStore = new NavigationStore()
const userStore = new UserStore()
const dinoStore = new DinoStore()

export default {
    loadingStore: loadingStore,
    navigationStore: navigationStore,
    userStore: userStore,
    dinoStore: dinoStore,
}