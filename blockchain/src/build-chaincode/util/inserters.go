package util
//File to use for invoke queries that insert things into the blockchain

import (
	"github.com/hyperledger/fabric/core/chaincode/shim"
	"fmt"
	"errors"
)

func StoreObjectInChain(stub shim.ChaincodeStubInterface, objectID string, indexName string, object []byte) error {
	ID, err := WriteIDToBlockchainIndex(stub, indexName, objectID)
	if err != nil {
		return errors.New("Writing ID to index: " + indexName + "Reason: " + err.Error())
	}

	fmt.Println("adding: ", string(object))

	err = stub.PutState(string(ID), object)
	if err != nil {
		return errors.New("Putstate error: " + err.Error())
	}

	return nil
}

func TransferBalance(stub shim.ChaincodeStubInterface, targetwalletid string, amount string) error {
	thingsIndex, err := GetIndex(stub, ThingsIndexName)
	if err != nil {
		return []string{}, errors.New("Unable to retrieve thingsIndex, reason: " + err.Error())
	}

	for _, thingID := range thingsIndex {
		thingAsBytes, err := stub.GetState(thingID)
		if err != nil {
			return []string{}, errors.New("Could not retrieve thing for ID " + thingID + " reason: " + err.Error())
		}

		var thing entities.Thing
		err = json.Unmarshal(thingAsBytes, &thing)
		if err != nil {
			return []string{}, errors.New("Error while unmarshalling thingAsBytes, reason: " + err.Error())
		}

		if thing.UserID == userID {
			// TODO:
			// thing.SomeProperty += amount;
			// do the same for other side.
		}
	}

	return nil
}