import express from "express";
import { resolve } from "path";
import multer from "multer";
const __dirname = import.meta.dirname;

const router = express.Router();
const upload = multer({ dest: resolve(__dirname, "public") });


router.get("/", (req, res) => {
	res.status(200).json({ message: "得到所有產品" });
});


router.post("/", upload.none(), async (req, res) => {
	res.status(200).json({ message: "新增一個產品" });
});


router.get("/search", (req, res) => {
	res.status(200).json({ message: `用 ID 作為搜尋條件來搜尋產品 ${id}` });

});
router.get("/:id", (req, res) => {
	const id = req.params.id;
	res.status(200).json({ message: `得到產品 ID 為 ${id} 的檔案` });
});

router.put("/:id", upload.none(), (req, res) => {
	const id = req.params.id;
	res.status(200).json({ message: `更新 ID 為 ${id} 的產品` });
});

router.delete("/:id", (req, res) => {
	const id = req.params.id;
	res.status(200).json({ message: `刪除 ID 為的${id}產品` });
});

export default router;
