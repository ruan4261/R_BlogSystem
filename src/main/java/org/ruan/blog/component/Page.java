package org.ruan.blog.component;

/**
 * 分页器
 */
public class Page {
    //当前页
    private Integer currentPageNo;
    //页大小
    private Integer pageSize;
    //总页数
    private Integer totalPage;
    //总信息条数
    private Integer totalCount;

    public Integer getCurrentPageNo() {
        return currentPageNo;
    }

    public void setCurrentPageNo(Integer currentPageNo) {
        this.currentPageNo = currentPageNo;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getTotalPage() {
        if (this.totalPage == null) this.setTotalPage(0);
        return totalPage;
    }

    public void setTotalPage(Integer totalPage) {
        if (totalCount % pageSize == 0) {
            this.totalPage = totalCount / pageSize;
        } else {
            this.totalPage = (totalCount / pageSize) + 1;
        }
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }
}
