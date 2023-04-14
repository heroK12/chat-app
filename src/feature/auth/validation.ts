export const validateNameField = (value: string) => {
    if (value.trim() === "") {
        return "ニックネームを入力してください";
    }
    if (value.length >= 16) {
        return "15文字以下で設定してください";
    }
};
