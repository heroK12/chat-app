import React from "react";

export interface Props {
    title: string;
    name: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
}

export const TextField: React.FC<Props> = ({
    title,
    name,
    placeholder,
    onChange,
    onBlur,
    error,
}) => {
    return (
        <div className="mb-6">
            <label
                htmlFor={name}
                className="block mb-2 text-left text-gray-500 font-semibold"
            >
                {title}
            </label>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                className={
                    "w-full p-3 placeholder-gray-300 border border-gray-200 rounded-md shadow-md focus:outline-none focus:ring focus:ring-opacity-50" +
                    (!!error ? "border-red-300 ring-red-300" : "")
                }
            />
            {!!error && (
                <div className="my-2 text-left text-red-400 text-sm">
                    {error}
                </div>
            )}
        </div>
    );
};
