import community from "../model/community";

export const createCommunity = async (req, res) => {
    const newCommunity = new community(req.body);
    try {
        await newCommunity.save();
        res.status(201).json(newCommunity);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addMembers = async (req, res) => {
    const { communityName, userId } =
        req.body;
    try {
        const community = await community.findOne({ name: communityName });

        community.members.push(userId);
        await community.save();
        res.status(201).json(community);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const kickMember = async (req, res) => {
    const { communityName, userId } =
        req.body;
    try {
        const community = await community.findOne({ name: communityName });

        community.members = community.members.filter((id) => id !== userId);
        await community.save();
        res.status(201).json(community);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}