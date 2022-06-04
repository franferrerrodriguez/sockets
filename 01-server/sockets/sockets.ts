import socketIO from "socket.io";

export const disconnect = (client: socketIO.Socket) => {
    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
}

export const message = (client: socketIO.Socket, io: socketIO.Server) => {
    client.on('message', (payload: { from: string, body: string }) => {

        console.log('Message received from server', payload);

        io.emit('message', payload);
        
    });
}
