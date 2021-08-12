console.log('Loading function');

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('cambio =', event.key1);
    console.log('github =', event.key2);
    console.log('otro cambio =', event.key3);
    return event.key1;  // Echo back the first key value
    // throw new Error('Something went wrong');
};
