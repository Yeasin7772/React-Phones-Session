import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
    console.log(phones);
    return (
        <div className="py-4">
            <h1 className="text-4xl text-center">Our Phones Collections</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }

            </div>

        </div>
    );
};

export default Phones;