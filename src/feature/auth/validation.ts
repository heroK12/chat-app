export const validateNameField = (value: string) => {
    if (value.trim() === "") {
        return "ニックネームを入力してください";
    }
};
