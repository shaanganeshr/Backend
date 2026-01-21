import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLength: 3,
            maxLength: 30
        },

        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLength: 3,
            maxLength: 30
        },

        loggedIn: {
            type: Boolean,
            default: false
        }
    },

    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// Method to compare password by the login user with the hashed password stored in the database
// .methods allows us to add methods to the schema
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export const User=mongoose.model("User",userSchema);