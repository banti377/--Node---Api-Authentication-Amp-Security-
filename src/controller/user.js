import { modal } from "../model/index.js"

export const register = async (req, res) => {
    try {
        let input = req.body
        const user = await modal.User.create(input)
        res.status(200).send({ data: user, success: true, message: "Created Successfully" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

export const update = async (req, res) => {
    try {
        let input = req.body.stud_id;
        console.log("🚀 ~ update ~ input:", input);

        let updateData = req.body;
        console.log("🚀 ~ update ~ data:", updateData);

        // Update user by stud_id (assumed to be a string identifier, not ObjectId)
        const user = await modal.User.findOneAndUpdate({ stud_id: input }, updateData, { new: true });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ data: user, success: true, message: "Updated Successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}
export const remove = async (req, res) => {
    try {
        let input = req.body.stud_name;
        console.log("🚀 ~ update ~ input:", input);

        const user = await modal.User.findOneAndDelete({ stud_name: input });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ data: user, success: true, message: "Deleted Successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}
