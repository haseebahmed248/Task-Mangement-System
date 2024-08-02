import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    notifications: [{
        type: {
            type: String,
            enum: ['Task', 'Friend', 'Message'], // Specify the types of notifications
            required: true
        },
        data: mongoose.Schema.Types.Mixed, // Can store any data relevant to the notification type
        ref: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'notifications.type' // Dynamically reference other collections based on the type
        }
    }]
});

export default mongoose.model("Notification", NotificationSchema);