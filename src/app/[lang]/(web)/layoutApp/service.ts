export async function getSearch(params: {
    page: number;
    limit: number;
    searchText?: string;
  }, pageParams: number) {
    params.page = pageParams;
    const url = new URL(`https://api-dev-loyalty-2.bilisoftware.com/api/customer/product?page=${params?.page}&limit=${params?.limit}`);
    !params?.searchText || params?.searchText === undefined ? url : url.searchParams.set('searchText',  params?.searchText ?? "");
    const res = await fetch(url, { headers: { merchant_id: '13' } })
    const projects = await res.json()

    return projects
}