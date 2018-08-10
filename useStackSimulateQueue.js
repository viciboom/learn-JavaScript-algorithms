let stack1 = [],
    stack2 = [];

function push(node)
{
    while (stack2.length !== 0) {
        stack1.push(stack2.pop());
    }
    stack1.push(node);
}
function pop()
{
    while(stack1.length !== 0) {
        stack2.push(stack1.pop());
    }
    return stack2.pop();
}