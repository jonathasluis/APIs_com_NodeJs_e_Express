// InterfacePetRepository.ts
import PetEntity from "../../entities/PetEntity";
import EnumPorte from "../../enum/EnumPorte";

export default interface InterfacePetRepository {
    criaPet(pet: PetEntity): void | Promise<void>;
    listaPet(): Array<PetEntity> | Promise<PetEntity[]>;
    atualizaPet(id: number,pet: PetEntity): Promise<{ success: boolean; message?: string }> | void;
    deletaPet(id: number): Promise<{ success: boolean; message?: string }> | void;
    adotaPet(id: number, idAdotante:number): Promise<{ success: boolean; message?: string }> | void;
    buscaPetPeloCampoGenerico<Tipo extends keyof PetEntity>(campo: Tipo, valor: PetEntity[Tipo]): Promise<PetEntity[]> | PetEntity[];
}