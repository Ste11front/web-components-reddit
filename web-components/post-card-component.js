class PostCardComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.post){
            console.log(this.post);
            this.shadowRoot.innerHTML = '';

            const div = document.createElement('div');
            this.shadowRoot.appendChild(div);
    
            const h3 = document.createElement('h3');
            h3.appendChild(document.createTextNode(this.post.title));
            div.appendChild(h3);

            this.shadowRoot.innerHTML = `
            <style>
            .card{
                display: flex;
                flex-direction: column;
                background-color: white;
                border-radius: 16px;
                padding: 16px;
                margin-bottom: 4px;
            }

            .card img{
                width:60%;
                border-radius:20px;
            }

            .card-title{
                font-size: x-large;
                font-weight: bold;
            }
            .card-author{
                font-size: large;
            }
            .card-details{
                display: flex;
            }
            .card-detail{
                flex:1;
            }
            </style>
            `;

            this.shadowRoot.innerHTML += `
            <div class="card">
                <span class="card-title">${this.post.data.title}</span>
                <span class="card-author">${this.post.data.author_fullname}</span>
                <img src="${this.post.data.thumbnail}" alt="">
                <div class="card-details">
                    <span class="card-detail">${this.post.data.created}</span>
                    <a href= "${this.post.data.url}" target="_blank" rel="noopener noreferrer">link al post originale</a>
                </div>
            </div>
            `
            console.log(post.title);

            const deleteBtn = document.createElement('button');
            deleteBtn.appendChild(document.createTextNode('cancellami'));
            this.shadowRoot.querySelector('.card').appendChild(deleteBtn);
            deleteBtn.addEventListener('click', () => this.emitEvent())
        }
    }

    emitEvent(){
        const customEvent = new CustomEvent('card-clicked', {detail: this.post.title});
        this.dispatchEvent(customEvent);
    }



}


customElements.define('post-card', PostCardComponent);