export const drawItemList = () => {
  let itemlistTemplate = `
              <div class="row row-cols-4">
            <div class="col">
              <div
                class="item_list_card d-flex flex-column"
                style="cursor: pointer"
              >
                <img
                  class="item_list_img mb-2 border border-2 rounded-3"
                  src="../../../public/assets/imgs/item-list-card.webp"
                  alt="가구"
                />
                <span class="item_list_name mb-1">밀튼 침대 Q (매트제외)</span>
                <p class="item_list_brand mb-1 text-muted">까사미아</p>
                <p class="item_list_price mb-3 fw-bold">437,400원</p>
              </div>
            </div>
          </div>
  `;
  // .item_list 부분에 삽입
  const ItemListTag = document.querySelector(".item_list");
  ItemListTag.innerHTML = itemlistTemplate;
};
