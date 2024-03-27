const mainContainer= document.getElementById('root')
function customRender(reactElem,container){
    // const domElem = document.createElement(reactElem.type)
    // domElem.innerHTML = reactElem.childern
    // domElem.setAttribute('href',reactElem.props.href)
    // domElem.setAttribute('target',reactElem.props.target)
    // container.appendChild(domElem)

    const domElem = document.createElement(reactElem.type)
    domElem.innerHTML = reactElem.childern
    for(const prop in reactElem.props){
        if(prop==='childern')continue;
        domElem.setAttribute(prop, reactElem.props[prop])
    }
    container.appendChild(domElem)
}
const reactElem = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    childern:'Click me to visit google'
}

customRender(reactElem,mainContainer)