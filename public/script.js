function toggleInfo() {
    const info = document.getElementById('additional-info');
    info.style.display = info.style.display === 'none' || info.style.display === '' ? 'block' : 'none';
}

function addPost() {
    const input = document.getElementById('post-input');
    const postContent = input.value.trim();
    if (postContent) {
        savePost(postContent);
        input.value = ''; // 입력 필드 초기화
    } else {
        alert("내용을 입력하세요.");
    }
}

function savePost(content) {
    const postContainer = document.getElementById('post-container');
    const newPost = document.createElement('p');
    newPost.textContent = content;
    postContainer.appendChild(newPost);
    updateLocalStorage(); // 로컬 스토리지 업데이트
}

function updateLocalStorage() {
    const postContainer = document.getElementById('post-container');
    const posts = Array.from(postContainer.children).map(post => post.textContent);
    localStorage.setItem('posts', JSON.stringify(posts)); // 게시물 목록을 로컬 스토리지에 저장
}

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        const newPost = document.createElement('p');
        newPost.textContent = post;
        postContainer.appendChild(newPost);
    });
}

document.addEventListener('DOMContentLoaded', loadPosts); // 페이지가 로드될 때 게시물 불러오기
