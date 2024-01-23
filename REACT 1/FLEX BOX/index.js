const child1 = React.createElement('div', { className: 'child one', key: 'child1' }, '1');
const child2 = React.createElement('div', { className: 'child two', key: 'child2' }, '2');
const child3 = React.createElement('div', { className: 'child three', key: 'child3' }, '3');
const child4 = React.createElement('div', { className: 'child four', key: 'child4' }, '4');

// Creating the parent element with children
const father = React.createElement('div', { id: 'father' }, 
    React.createElement('div', { className: 'parentText' }, 'parent'), 
    [child1, child2, child3, child4]
);

// Rendering the React component into the root element
ReactDOM.render(father, document.getElementById('root'));
