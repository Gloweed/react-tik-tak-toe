import { UiModal } from "../uikit/ui-modal";
import { UiButton } from "../uikit/ui-button";
import { UiTextField } from "../uikit/fields/ui-text-field";

export function AuthModal({ onLogin, textButton, isOpen, onClose }) {
  const isLogIn = textButton === "Вход";

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    const res = await fetch(
      "https://67f66d8c42d6c71cca620115.mockapi.io/api/v1/players",
    );
    const users = await res.json();
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      onLogin(user);
      onClose();
    } else {
      alert("Неверные данные");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    const res = await fetch(
      "https://67f66d8c42d6c71cca620115.mockapi.io/api/v1/players",
    );
    const users = await res.json();
    const user = users.find((u) => u.username === username);

    if (user) {
      alert("Пользователь с таким именем уже существует");
      return;
    }

    const newUser = {
      username,
      password,
      rating: "1000",
      symbol: null,
      avatar: "/avatars/avatar-1.png",
    };

    const createRes = await fetch(
      "https://67f66d8c42d6c71cca620115.mockapi.io/api/v1/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      },
    );

    const createdUser = await createRes.json();
    alert("Регистрация прошла успешно!");
    onLogin(createdUser);
    onClose();
  };

  return (
    <UiModal isOpen={isOpen} onClose={onClose}>
      <UiModal.Header>{isLogIn ? "Вход" : "Регистрация"}</UiModal.Header>
      <form
        onSubmit={isLogIn ? handleLogin : handleRegister}
        action="#"
        className="flex flex-col flex-auto"
      >
        <UiModal.Body>
          <div className="flex justify-evenly gap-2 pt-10">
            <UiTextField
              id="name"
              typeInput="text"
              label="Имя пользователя"
              required
            />
            <UiTextField
              id="password"
              typeInput="password"
              label="Пароль"
              required
            />
          </div>
        </UiModal.Body>
        <UiModal.Footer>
          {isLogIn ? (
            <UiButton type="submit" size="md" variant="primary">
              Войти
            </UiButton>
          ) : (
            <UiButton type="submit" size="md" variant="primary">
              Зарегистрироваться
            </UiButton>
          )}
        </UiModal.Footer>
      </form>
    </UiModal>
  );
}
