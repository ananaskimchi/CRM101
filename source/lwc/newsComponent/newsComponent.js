import { LightningElement, track, wire, api } from 'lwc';
import retriveNews from "@salesforce/apex/newsComponent.retriveNews";
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

export default class NewsComponent extends LightningElement {
    
    @api recordId;
    @track url = '';
    @track result = [];
    @track selectedNews = {};
    @track isModalOpen = false;

    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    wiredAccount({ error, data }) {
        if (data) {
            // 데이터가 성공적으로 로드되면 fetchNews 호출
            this.url = getFieldValue(data, ACCOUNT_NAME_FIELD); // 수정된 부분: 올바른 방법으로 accountName을 얻음
            this.fetchNews();
        } else if (error) {
            // 에러 처리
            console.error(error);
        }
    }

    /***modalBackdropClass method set the classes based on the isModalOpen Value ***/
    get modalClass(){
        return `slds-modal ${this.isModalOpen ? "slds-fade-in-open" :""}`
    }
    /***modalBackdropClass method set the class based on the isModalOpen Value ***/
    get modalBackdropClass(){
        return this.isModalOpen ? "slds-backdrop slds-backdrop_open" : "slds-backdrop"
    }
    
/****fetchNews method gets called on page load, and within this, we are calling the retriveNews apex method using apex imperative approach****/
    fetchNews(){
        let url = `https://newsapi.org/v2/top-headlines?q=${this.url}&country=kr&category=technology&apiKey=be7fd40ad7fb486fbea5cb7c4ca75429`;
        retriveNews({url: url}).then(response => {
            this.formatNewsData(response.articles)
        }).catch(error => {
            console.error(error);
        })
    }
/****formatNewsData method structuring the response we are getting from the apex method by adding the id, name and date  ****/
formatNewsData(res) {
    // 여기에서 res 배열을 slice 메소드로 6개 아이템으로 제한
    let limitedRes = res.slice(0, 6);
    this.result = limitedRes.map((item, index) => {
        let id = `new_${index + 1}`;
        let date = new Date(item.publishedAt).toDateString();
        let name = item.source.name;
        return { ...item, id: id, name: name, date: date };
    });
}
    /****showModal method fetch the id of the news card that has been clicked and filter particular news based on the id ****/
    showModal(event){
        let id = event.target.dataset.item;
        this.result.forEach(item=>{
            if(item.id === id){
                this.selectedNews ={...item}
            }
        })
        this.isModalOpen = true;
    }
    /****closeModal method close the modal ****/
    closeModal(){
        this.isModalOpen = false;
    }
}