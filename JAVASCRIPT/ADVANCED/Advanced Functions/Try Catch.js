let connection = {
    open: function () {
        console.log('open a connection');
    },

    close: function () {
        console.log('close the connection');
    }
};

try {
    connection.open();
} catch (error) {
    console.log(error.message)
} finally {
    connection.close();
}