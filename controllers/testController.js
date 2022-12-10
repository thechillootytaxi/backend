export const testing = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            messege: `Chill point taxi Server is working Fine`,
            data: null
        });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, messege: 'Internal Server error', data: null});
    }
};