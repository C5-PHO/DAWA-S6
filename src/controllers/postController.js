import postService from "../services/postService.js";

class PostController {
    async showCreateForm(req, res) {
        try {
            const users = await postService.getUsers();
            res.render("post-form", {
                title: "Nueva publicación",
                post: {},
                users,
                action: "/posts",
                submitLabel: "Publicar",
                error: null,
            });
        } catch (error) {
            res.status(500).render("error", { message: error.message });
        }
    }

    async create(req, res) {
        try {
            const { userId } = req.body;
            const post = await postService.createPost(userId, req.body);
            res.redirect(`/posts#post-${post._id}`);
        } catch (error) {
            const users = await postService.getUsers();
            res.status(400).render("post-form", {
                title: "Nueva publicación",
                post: req.body,
                users,
                action: "/posts",
                submitLabel: "Publicar",
                error: error.message,
            });
        }
    }

    async getAll(req, res) {
        try {
            const posts = await postService.getPosts();
            res.render("posts", { posts });
        } catch (error) {
            res.status(500).render("error", { message: error.message });
        }
    }

    async showEditForm(req, res) {
        try {
            const [post, users] = await Promise.all([
                postService.getPostById(req.params.id),
                postService.getUsers(),
            ]);

            res.render("post-form", {
                title: "Editar publicación",
                post,
                users,
                action: `/posts/${post._id}/update`,
                submitLabel: "Guardar cambios",
                error: null,
            });
        } catch (error) {
            res.status(404).render("error", { message: error.message });
        }
    }

    async update(req, res) {
        try {
            await postService.updatePost(req.params.id, req.body.userId, req.body);
            res.redirect(`/posts#post-${req.params.id}`);
        } catch (error) {
            const users = await postService.getUsers();
            res.status(400).render("post-form", {
                title: "Editar publicación",
                post: { ...req.body, _id: req.params.id },
                users,
                action: `/posts/${req.params.id}/update`,
                submitLabel: "Guardar cambios",
                error: error.message,
            });
        }
    }

    async delete(req, res) {
        try {
            await postService.deletePost(req.params.id);
            res.redirect("/posts");
        } catch (error) {
            res.status(404).render("error", { message: error.message });
        }
    }
}

export default new PostController();
