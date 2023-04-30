import ContactFrom from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Nouveau Contact" />
      <ContactFrom buttonLabel="Sauvegarder" />
    </>
  );
}
