import { API_CUSTOMER_PROFILE } from "@/common/constants/api.constants";
import { IEditCustomerForm } from "../interfaces/customer-profile.interface";

export const editCustomerProfile = async (data: IEditCustomerForm) => {
  try {
    const response = await fetch(API_CUSTOMER_PROFILE, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to edit customer profile");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
