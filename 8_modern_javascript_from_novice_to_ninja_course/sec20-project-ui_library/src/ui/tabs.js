class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelector('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e=>{
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e){
        // remove current active classes
        this.tabs.forEach(tab=>tab.classList.remove('active'));
    }
}