export const peopleFetch = async () => {
  const people = await fetch("/databases/people.json").then((res) =>
    res.json()
  );

  return people;
};

export const postsFetch = async () => {
  const posts = await fetch("/databases/posts.json").then((res) => res.json());

  return posts;
};

export const commentsFetch = async () => {
  const comments = await fetch("/databases/comments.json").then((res) =>
    res.json()
  );

  return comments;
};

export const chatsFetch = async () => {
  const chats = await fetch("/databases/chats.json").then((res) => res.json());

  return chats;
};

export const loginFetch = async (email, password) => {
  const logins = await fetch("/databases/logins.json").then((res) =>
    res.json()
  );

  const user = logins.find((u) => u.email === email && u.password === password);

  if (user) {
    const people = await peopleFetch();
    return people.find((p) => p.user_id === user.user_id);
  } else {
    return null;
  }
};
