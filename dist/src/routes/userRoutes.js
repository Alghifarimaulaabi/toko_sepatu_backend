import { Router } from 'express';
import { getAllUsers, deleteUser } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/auth.js';
const router = Router();
// Endpoint untuk mendapatkan semua pengguna (admin only)
router.get('/', authMiddleware, getAllUsers);
// Endpoint untuk menghapus pengguna
router.delete('/admin/:id', authMiddleware, deleteUser);
export default router;
//# sourceMappingURL=userRoutes.js.map