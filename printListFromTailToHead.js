function printListFromTailToHead(head)
{
    let array = [];
    while (head != null) {
        array.unshift(head.val);
        head = head.next;
    }
    return array;
}