import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    stud_id:String,
    stud_name: String,
    stud_email: String,
    stud_password: String,
    stud_birthday: String,
},
    { timestamp: true }
)

userSchema.pre("save", async function (next) {
    if (this.isModified("stud_password")) {
        this.stud_password = await bcrypt.hash(this.stud_password, 12)
    }
})

userSchema.methods.validatePassword = async function (stud_password) {
    return await bcrypt.compare(stud_password, this.stud_password)
}

export const User = mongoose.model("user", userSchema)