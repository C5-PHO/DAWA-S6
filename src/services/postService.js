import postRepository from "../repositories/PostRepository.js";
import userRepository from "../repositories/UserRepository.js";

class PostService {
    async createPost(userId, postData) {
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        return await postRepository.create({
            ...this.normalizePostData(postData),
            user: user._id,
        });
    }

    async getPosts() {
        return await postRepository.findAll();
    }

    async getPostById(postId) {
        const post = await postRepository.findById(postId);

        if (!post) {
            throw new Error("Publicación no encontrada");
        }

        return post;
    }

    async getPostsByUser(userId) {
        return await postRepository.findByUser(userId);
    }

    async updatePost(postId, userId, postData) {
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        const post = await postRepository.update(postId, {
            ...this.normalizePostData(postData),
            user: user._id,
        });

        if (!post) {
            throw new Error("Publicación no encontrada");
        }

        return post;
    }

    async deletePost(postId) {
        const post = await postRepository.delete(postId);

        if (!post) {
            throw new Error("Publicación no encontrada");
        }

        return post;
    }

    async getUsers() {
        return await userRepository.findAll();
    }

    normalizePostData(postData) {
        const hashtags = Array.isArray(postData.hashtags)
            ? postData.hashtags
            : String(postData.hashtags || "").split(",");

        return {
            title: postData.title,
            content: postData.content,
            imageUrl: postData.imageUrl,
            hashtags: hashtags
                .map((hashtag) => hashtag.trim())
                .filter(Boolean)
                .map((hashtag) => hashtag.startsWith("#") ? hashtag : `#${hashtag}`),
        };
    }
}

export default new PostService();
