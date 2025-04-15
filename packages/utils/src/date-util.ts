export class DateUtil {

  /**
   * ISO 8601 형식의 날짜 문자열을 한국 시간으로 변환하여 배열로 반환합니다.
   * @param isoString ISO 8601 형식의 날짜 문자열
   * @returns [연도, 월, 일, 요일, 시, 분, 초] ex: // ['2025', '04', '15', '화', '16', '57', '08']
   */
  static getDateArray(iso: string): string[] {
    const date = new Date(iso)

    // 요일 정보
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']
    const dayOfWeek = daysOfWeek[date.getDay()]

    // 배열로 변환
    return [
      date.getFullYear().toString(), // 연도
      (date.getMonth() + 1).toString().padStart(2, '0'), // 월 (0부터 시작하므로 +1)
      date.getDate().toString(), // 일
      dayOfWeek ?? '', // 요일
      date.getHours().toString().padStart(2, '0'), // 시
      date.getMinutes().toString().padStart(2, '0'), // 분
      date.getSeconds().toString().padStart(2, '0'), // 초
    ]
  }

  /**
   * @returns {string} '2025-04-15 16:57' 형식의 문자열
   */
  static getFull(iso: string): string {
    const isoLocal = iso || new Date().toISOString()
    const dataArray = DateUtil.getDateArray(isoLocal)
    return `${dataArray[0]}-${dataArray[1]}-${dataArray[2]} ${dataArray[4]}:${dataArray[5]}`
  }
}