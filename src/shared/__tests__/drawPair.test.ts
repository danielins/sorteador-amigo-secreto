import { friendlistMock } from "../../../__mocks__/friendlistMock"
import { drawPair } from "../drawPair"

describe('when drawing names', () => {
  test("you can't draw yourself", () => {
    const pairings = drawPair(friendlistMock)
    friendlistMock.forEach(friend => {
      const pair = pairings.get(friend.name)
      expect(pair).not.toEqual(friend.name)
    })
  })
})