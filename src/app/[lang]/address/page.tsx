import AddressHeader from "./address-list/components/AddressHeader";
import AddressList from "./address-list/components/AddressList";
import NoDataAddress from "./address-list/components/NoDataAddress";

export default function AddressPage() {
  return (
    <main>
      <AddressHeader />
      <NoDataAddress isOpen={false} />
      <AddressList />
    </main>
  );
}
