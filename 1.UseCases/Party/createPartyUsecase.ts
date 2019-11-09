import { Party } from "../../0.Entities/Party";

export const getPartyUsecase = (partyRepository) => async (partyId: number) => {
    const partyEntity = new Party(partyRepository);
    try {
        const partyPromise = partyEntity.get(partyId)
        const party = partyPromise
        return party
    }
    catch (e) {
        return {
            error: e.message
        }
    }
}