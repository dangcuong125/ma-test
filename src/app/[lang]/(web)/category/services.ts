import { MOCK_DATA } from "./constants";

export async function getListCategory(categoryId: number) {
  const res = await fetch(
    `https://api-dev-loyalty-2.bilisoftware.com/api/customer/product?categoryIds=${categoryId}&page=1&limit=20`,
    { headers: { merchant_id: "13" } }
  );
  const projects = await res.json();

  return projects;
}

export async function getProjects(categoryId: number) {
  const res = await fetch(
    `https://api-dev-loyalty-2.bilisoftware.com/api/customer/category/${categoryId}`,
    { headers: { merchant_id: "13" } }
  );
  const projects = await res.json();

  return projects;
}

export const getAllCategory=() => {
    return MOCK_DATA;
}