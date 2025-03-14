import { useTranslation } from "react-i18next";


function ModalForm({ handleClose, handleSubmit }) {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6">
          {t("Sign_Up", { defaultValue: "Sign Up" })}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {t("Name", { defaultValue: "Name" })}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please enter your name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700"
            >
              {t("Surname", { defaultValue: "Surname" })}
            </label>
            <input
              type="text"
              id="surname"
              name="username"
              placeholder="Please enter your surname"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              {t("Age", { defaultValue: "Age" })}
            </label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Please enter your age"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {t("Phone", { defaultValue: "Phone" })}
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Please enter your phone number"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t("Sign_Up", { defaultValue: "Sign Up" })}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
